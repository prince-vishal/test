import { Database } from '@vuex-orm/core';
import User from '~/data/models/user';
import Group from '~/data/models/group';
import Client from '~/data/models/client';

const database = new Database();
database.register(User);
database.register(Group);
database.register(Client);

export default database;
