export const getRegistrationFieldsResponse = {
  ok: 1,
  data: {
    'customer-lastname': {
      req: true,
      group: '',
      visible: true,
      order: 2,
      maxlength: 150,
      type: 'text',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: true,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
      regex: '^[a-zA-ZĀČĒĢĪĶĻŅŠŪŽāčēģīķļšūžņ\\-\\ ]*$',
    },
    'customer-phone': {
      req: true,
      group: '',
      visible: true,
      order: 3,
      maxlength: 50,
      type: 'text',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: true,
      clientzone_editable: true,
      clientzone_check: 'sms',
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: true,
      condition_type: 0,
      condition: [],
      regex: '^2[0-9]{7}$',
    },
    'customer-monthly-income': {
      req: true,
      group: '',
      visible: true,
      order: 6,
      maxlength: 10,
      type: 'text',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: true,
      clientzone_editable: true,
      clientzone_check: null,
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
      regex: '^[0-9]+$',
    },
    'bank-iban': {
      req: false,
      group: '',
      visible: false,
      order: 1000,
      maxlength: 31,
      type: 'text',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: true,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
    },
    language: {
      req: true,
      group: '',
      visible: false,
      order: 1000,
      maxlength: null,
      type: 'select',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: false,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
      values: {
        lv: 'latvian',
        ru: 'russian',
      },
    },
    'customer-personcode': {
      req: true,
      group: '',
      visible: true,
      order: 5,
      maxlength: 50,
      type: 'text',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: true,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
      regex: '^[0-9]{6}-[0-9]{5}$',
    },
    'customer-email': {
      req: true,
      group: '',
      visible: true,
      order: 4,
      maxlength: 50,
      type: 'text',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: true,
      clientzone_editable: true,
      clientzone_check: 'email',
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: true,
      condition_type: 0,
      condition: [],
      regex: '^(?:[A-z0-9_%+-]+\\.)*[A-z0-9_%+-]+@[A-z0-9][A-z0-9-]*(?:\\.[A-z]+)+$',
    },
    'customer-firstname': {
      req: true,
      group: '',
      visible: true,
      order: 1,
      maxlength: 50,
      type: 'text',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: true,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
      regex: '^[a-zA-ZĀČĒĢĪĶĻŅŠŪŽāčēģīķļšūžņ\\-\\ ]*$',
    },
    'customer-gender': {
      req: true,
      group: '',
      visible: false,
      order: 1000,
      maxlength: null,
      type: 'select',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: false,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
      values: ['Male', 'Female', 'Unknown'],
    },
    'customer-birthday': {
      req: true,
      group: '',
      visible: false,
      order: 1000,
      maxlength: 10,
      type: 'text',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: false,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: false,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
    },
    'pep-status': {
      req: false,
      group: '',
      visible: false,
      order: 1000,
      maxlength: null,
      type: 'checkbox',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: false,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: true,
      cl_visible: false,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
      regex: '^[10]$',
    },
    'aml-check': {
      req: false,
      group: '',
      visible: false,
      order: 1000,
      maxlength: null,
      type: 'checkbox',
      newline: false,
      hidetitle: false,
      split: false,
      mapper: 'Itdata\\Laravel\\CountrySpecific\\LatviaMapper',
      clientzone_visible: false,
      clientzone_editable: false,
      clientzone_check: null,
      clientzone_required: true,
      cl_visible: true,
      step: 0,
      auto_approve: false,
      condition_type: 0,
      condition: [],
      regex: '^[10]$',
    },
  },
};