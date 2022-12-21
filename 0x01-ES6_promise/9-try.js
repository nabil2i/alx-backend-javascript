export default function guardrail(mathFunction) {
  const queue = [];
  const msg = 'Guardrail was processed';
  try {
    const val = mathFunction();
    if (Number.isInteger(val)) {
      queue.push(val);
    }
  } catch (e) {
    const error = `Error: ${e.message}`;
    queue.push(error);
  } finally {
    queue.push(msg);
  }
  return queue;
}
