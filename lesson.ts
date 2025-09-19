interface Lesson {
  title: string
  teacher: string 
  room: string
  type: string   // (л) = Лекція / (с) = Семінар / (п) = Практика і т.п.
  groups: string[] // Масив груп, у яких ця пара (одна і та ж пара у декількох груп одночасно)
  startTime: string  // "HH:mm" format
  endTime: string    // "HH:mm" format
  week: "1st week" | "2nd week" | "both"
  day: number        // 1-7 (Понеділок-Неділя)
}