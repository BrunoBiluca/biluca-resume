export function getChildByType(children, type){
  return children.filter(c => c.type === type)[0]
}