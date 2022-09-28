import React from "react";


export default function KL(){
    const student=[
    {   name:"vijay",

        subject:[
        {Title :"reactjs",}
         ]
    }
        
    ]
   
        return(
            <div>
             {student.map((data,index)=>(
                <div key={index}>
                    {data.name}
                            <div>
                                {data.subject.map((dev,index)=>(
                                    <div key={index} >
                                    {dev.Title}
                                    </div>
                                )
                                    
                                )}
                            </div>
                </div>
             ))}
            </div>
        );
    
}