import bcrypt from 'bcrypt';

export async function doHashPassword(password: string): Promise<string> {
   const saltRounds: number = 10;
   const hashPassword: string = await bcrypt.hash(password, saltRounds);
   return hashPassword;
}

export async function comparePassword(password: string, hashPassword: string): Promise<boolean> {
   const match: boolean = await bcrypt.compare(password, hashPassword);
   return match;
}
