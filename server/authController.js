const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const transporter = req.app.get('transporter');
        const {name, email, password} = req.body;
        const existingUser = await db.check_user(email);
        if (existingUser[0]) {
            return res.status(409).send('user already exists')
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = await db.create_user([name, email, hash])
            req.session.user = {
                userId: newUser[0].user_id,
                name: newUser[0].name,
                email: newUser[0].email
            }
            const mailOptions = {
                from: 'Sploosh',
                to: email,
                subject: 'Welcome! So happy to have you.',
                //could do text or html
                text: 'It is an honor and privilege to correspond with you.'

            }
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('email sent successfully!')
                }
            })
            res.status(200).send(req.session.user)
        }
    },
    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;
        const existingUser = await db.check_user(email);
        if (!existingUser[0]) {
            res.status(500).send('Sorry, this email is not registered')
        } else {
            const authenticated = bcrypt.compareSync(password, existingUser[0].password);
            if (authenticated) {
                req.session.user = {
                    userId: existingUser[0].user_id,
                    name: existingUser[0].name,
                    email: existingUser[0].email
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('invalid credentials')
            }
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}