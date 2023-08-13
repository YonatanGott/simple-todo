import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_URL || 'localhost'
const dbName = 'Todo'

export const initMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(`mongodb://${mongoUrl}/${dbName}`)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(`Can't connect to Database : ${error}`)
  }
}

const mongo = mongoose.connection
export default mongo
