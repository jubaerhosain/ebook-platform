export class UsersRepository {
    create() {}

    update() {}

    findAll() {}
    
    findOne(id: number) {}

    findOneByEmail(email: string) {
        return {
            id: 1,
            name: 'Md. Jubaer Hosain',
            email: 'jubaer@gmail.com',
            role: 'ADMIN',
        };
    }

    remove(id: number) {}
}
