const xmlMap = {
  'family': 1,
  'person': 2,
  'firstName': 3,
  'lastName': 4,
  'state': 5
}

const encode = (root, xml=[]) => {
  xml.push(xmlMap[root.tag]);
  if (root.attrs) 
    root.attrs.forEach(attr => {
      xml.push(xmlMap[attr.name]);
      xml.push(attr.value);
    });
  
  xml.push(0);

  if (root.value) 
    xml.push(root.value)

  if (root.children) {
    root.children.forEach(node => encode(node, xml));
  }
  
  xml.push(0);
  
  return xml;
}

let root = {
  tag: 'family',
  attrs: [
    {
      name: 'lastName',
      value: 'McDowell'
    },
    {
      name: 'state',
      value: 'CA'
    }
  ],
  children: [
    {
      tag: 'person',
      attrs: [
        {
          name: 'firstName',
          value: 'Gayle'
        }
      ],
      value: 'some message'
    }
  ]
}

console.log(encode(root).join(' '));