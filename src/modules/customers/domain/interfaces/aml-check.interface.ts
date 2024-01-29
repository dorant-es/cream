export interface AmlCheck {
  req: boolean;
  group: string;
  visible: boolean;
  order: number;
  maxlength: any;
  type: string;
  newline: boolean;
  hidetitle: boolean;
  split: boolean;
  mapper: string;
  clientzone_visible: boolean;
  clientzone_editable: boolean;
  clientzone_check: any;
  clientzone_required: boolean;
  cl_visible: boolean;
  step: number;
  auto_approve: boolean;
  condition_type: number;
  condition: any[];
  regex: string;
}
