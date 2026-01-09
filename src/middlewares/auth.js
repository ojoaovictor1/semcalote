
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const Auth = {
    private: (req, res, next) =>{
        let sucess = false;

        if(req.headers.authorization){
            const [authType, token] = req.headers.authorization.split(' ');
            if(authType === 'Bearer' && token){
                try {
                    JWT.verify(token, process.env.JWT_SECRET_KEY);
                    sucess = true;
                } catch (error) {
                    sucess = false;
                }
            }

        }


        if(sucess){
            next();
        }else{
            res.status(403);
            res.json({ error : 'Não Autorizado! (barrado na middleware)'});
        }
    }
}