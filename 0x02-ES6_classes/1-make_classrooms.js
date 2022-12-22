import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const numbers = [19, 20, 34];
  let i = 0;
  while (i < numbers.length) {
    rooms.push(new ClassRoom(numbers[i]));
    i += 1;
  }
  return rooms;
}
