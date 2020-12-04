const userform_name = user_info => {
  console.log(user_info);
  switch (user_info) {
    case 'user-info':
      return {
        name: 'name',
        aliases: 'aliases',
        current_email: 'current_email',
        past_emails: 'past_emails',
        gender: 'gender',
        birthdate: 'birthdate',
        current_address: {
          city: 'current_address.city',
          state: 'current_address.state',
          zip_code: 'current_address.zip_code',
          country: 'current_address.country',
          street: 'current_address.street',
        },
        current_phone: 'current_phone',
        past_adresses: [
          {
            country: 'past_adresses[0].country',
            state: 'past_adresses[0].state',
            city: 'past_addresses[0].city',
            street: 'past_addresses[0].street',
            zip_code: 'past_adresses[0].zip_code',
          },
          {
            country: 'past_adresses[1].country',
            state: 'past_adresses[1].state',
            city: 'past_addresses[1].city',
            street: 'past_addresses[1].street',
            zip_code: 'past_adresses[1].zip_code',
          },
        ],
        past_phones: ['past_phones[0]', 'past_phones[1]'],
      };
      break;

    case 'family-member-1':
    case 'family-member-2':
    case 'family-member-3':
      console.log('Hello');
      const index = Number(user_info.split('-')[2]) - 1;
      return {
        name: `relatives[${index}].name`,
        aliases: `relatives[${index}].aliases`,
        current_email: `relatives[${index}].current_email`,
        past_emails: `relatives[${index}].past_emails`,
        gender: `relatives[${index}].gender`,
        birthdate: `relatives[${index}].birthdate`,
        client_id: `relatives[${index}].client_id`,
        current_address: {
          city: `relatives[${index}].current_address.city`,
          state: `relatives[${index}].current_address.state`,
          zip_code: `relatives[${index}].current_address.zip_code`,
          country: `relatives[${index}].current_address.country`,
          street: `relatives[${index}].current_address.street`,
        },
        current_phone: `relatives[${index}]current_phone`,
        past_adresses: [
          {
            city: `relatives[${index}].past_adresses[0].city`,
            state: `relatives[${index}].past_adresses[0].state`,
            zip_code: `relatives[${index}].past_adresses[0].zip_code`,
            country: `relatives[${index}].past_adresses[0].country`,
            street: `relatives[${index}].past_adresses[0].street`,
          },
          {
            city: `relatives[${index}].past_adresses[1].city`,
            state: `relatives[${index}].past_adresses[1].state`,
            zip_code: `relatives[${index}].past_adresses[1].zip_code`,
            country: `relatives[${index}].past_adresses[1].country`,
            street: `relatives[${index}].past_adresses[1].street`,
          },
        ],
        past_phones: [
          `relatives[${index}].past_phones[0]`,
          `relatvies[${index}].past_phones[1]`,
        ],
      };
  }
};

module.exports = { userform_name };
