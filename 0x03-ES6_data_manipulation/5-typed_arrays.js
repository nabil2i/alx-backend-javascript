export default function createInt8TypedArray(length, position, value) {
  const msg = 'Position outside range';
  const buffer = new ArrayBuffer(length);
  const int8View = new DataView(buffer, 0);
  if (position > length - 1) {
    throw new Error(msg);
  }
  int8View.setInt8(position, value);
  return int8View;
}
