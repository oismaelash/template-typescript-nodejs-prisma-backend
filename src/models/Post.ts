export class Post {
  constructor (id?: string, name?: string, title?: string, body?: string, isSchedule?: boolean, datetimeSchedule?: string) {
    this.id = id
    this.title = title
    this.body = body
    this.isSchedule = isSchedule
    this.datetimeSchedule = datetimeSchedule
  }

  id: string
  title: string
  body: string
  isSchedule: boolean
  datetimeSchedule: string
}
