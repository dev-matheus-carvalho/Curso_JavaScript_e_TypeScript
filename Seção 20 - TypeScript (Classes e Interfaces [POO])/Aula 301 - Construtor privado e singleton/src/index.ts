// Singleton - GoF

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect() {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDataBase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDataBase('localhost', 'root', '123');
db1.connect();

const db2 = Database.getDataBase('localhost', 'root', '123');
db2.connect();

console.log(db1 === db2);
