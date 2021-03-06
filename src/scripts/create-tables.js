import fs from 'fs-extra'
import {join} from 'path'
import db from '../db/connection.js'

const sqlFilePath = join(process.cwd(), 'src/sql/create-tables.sql')

const createDefaultTable = async () => {
    try {
        const sqlCommandsBuffer = await fs.readFile(sqlFilePath)
        const sqlCommands = sqlCommandsBuffer.toString()
        await db.query(sqlCommands)
        console.log('tables are created');
    } catch (error) {
        console.log('tables are not created!');
        console.log(error);
    }
}

export default createDefaultTable