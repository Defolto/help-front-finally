export function getRandom(min: number, max: number): number {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getMass(length: number): any[] {
   return new Array(length).fill(0)
}