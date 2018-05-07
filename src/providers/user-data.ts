import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
    public events: Events,
    public storage: Storage
  ) {}

  login(username: string, role: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true)
    .then(() => {this.storage.set('username', username)})
    .then(() => {this.storage.set('role', role)})
    .then(() => {this.events.publish('user:login')})
    /*
    this.setUsername(username);
    this.setRole(role);
    this.events.publish('user:login');*/
  };

  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  setRole(role: string): void {
    this.storage.set('role', role);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };
  getRole(): Promise<string> {
    return this.storage.get('role').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
}
