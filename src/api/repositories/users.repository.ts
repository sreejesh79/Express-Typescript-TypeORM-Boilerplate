import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { masterDBConnection } from '../../config/db';
import { UsersEntity } from '../entity/users.entity';
import { IRepository } from './base.repository';

@Service()
export class UsersRepository implements IRepository {
	constructor () {}

	getRepository = (): Repository<UsersEntity> => {
		return masterDBConnection().getRepository( UsersEntity );
	};

	public getAll = async (): Promise<UsersEntity[]> => {
		const result: UsersEntity[] = await this.getRepository().find();
		return result;
	};
}