// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import main from "../../lib/connection"
import userModel from "../../lib/userSchema"
main().catch((error)=>{
  console.log(error)
})
export default function handler(req, res) {
  if(req.method=="GET"){
    res.status(200).json({ name: 'John Doe' })
  }else if(req.method=="POST"){
    let form = new userModel(req.body)
    form.save((err)=>{
      if(!err){
        res.status(201).json("data saved successfully")
      }else{
        res.status(401).json("problem oooo")
      }
    })
   
  }
  
}
