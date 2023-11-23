export function getChildByType(children, type) {
  return children.filter(c => c.type === type)[0]
}

export function classNames(...names) {
  return names.join(' ');
}
