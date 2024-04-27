import mongoose from 'mongoose';

export function dbConnect(){
    try {
      mongoose.connect(process.env.MOGO_URI!); 

      mongoose.connection.on('connected', ()=>{
         console.log('DB is connected to MongoDB');
      });

      mongoose.connection.on('error', (error)=>{
        console.log('DB connection error:', error);
        process.exit(1); 
      });
      
    } catch (error) {
      console.log('Something went wrong in connecting to the database:', error);  
    }
}
