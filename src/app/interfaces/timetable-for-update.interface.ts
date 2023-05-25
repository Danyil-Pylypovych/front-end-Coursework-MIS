export interface ITimetableForUpdate {
  _id?: string,
  day?: string,
  time?: string,
  isChecked?: boolean,
  patientId?: string,
  patientName?: string,
  doctorId?: string,
  isCompleted?: boolean,
}
