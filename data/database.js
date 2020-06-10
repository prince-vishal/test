import { Database } from '@vuex-orm/core';
import User from '~/data/models/user';
import Group from '~/data/models/group';

const database = new Database();
database.register(User);
database.register(Group);

export default database;
