import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const MONGO_CNN = process.env.MONGO_CNN;

export const connectToDB = () => {
	mongoose
		.connect(MONGO_CNN)
		.then(() => console.log('Conectado a la base de datos 🔃'))
		.catch((err) => console.log(`Error in db connection ${err}`));
};

// export default connectToDB;
