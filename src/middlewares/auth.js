
export const Auth = {
    private: (req, res, next) =>{
        let sucess = true;

        if(sucess){
            next();
        }else{
            res.status(403);
            res.json({ error : 'Não Autorizado! (barrado na middleware)'});
        }
    }
}