import { MigrationInterface, QueryRunner } from 'typeorm';

export class EducationalResources1690919825516 implements MigrationInterface {
  name = 'EducationalResources1690919825516';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`activity_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` int NOT NULL, \`descripcion\` int NOT NULL, \`category\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`activity_log\``);
  }
}
