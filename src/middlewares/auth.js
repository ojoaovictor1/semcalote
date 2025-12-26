import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';

dotenv.config();

export const Auth = {
    private: (req, res, next) =>{
        let sucess = false;

        if(req.headers.authorization){
            const token = req.headers.authorization.split(' ')[1];
            try {
                const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);
                sucess = true;
                req.usuario = decoded;
                next();
            } catch (error) {
                res.status(401).json({ error: "Token inválido"});
            }
        }
    }
}