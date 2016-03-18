import { Pipe, PipeTransform } from 'angular2/core';
import { Contact } from './contact.service';

@Pipe({ name: 'sortContacts' })
export class SortContactsPipe implements PipeTransform {
  transform(value: Contact[], args: any[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Contact, b: Contact) => {
      if (a.last_name < b.last_name) { return -1; }
      if (a.last_name > b.last_name) { return 1; }
      return 0;
    });
  }
}