import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const myArray = [];
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(10);
  myArray.push(room1);
  myArray.push(room2);
  myArray.push(room3);
  return myArray;
}
