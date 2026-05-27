type LexicalTextNode = {
  type: 'text'
  text: string
  format?: number
  detail?: number
  mode?: string
  style?: string
  version?: number
}

type LexicalElementNode = {
  type: string
  tag?: string
  children: LexicalNode[]
  direction?: string
  format?: string | number
  indent?: number
  version?: number
  listType?: string
  start?: number
  value?: number
}

type LexicalNode = LexicalTextNode | LexicalElementNode

export const lexicalText = (text: string): LexicalTextNode => ({
  type: 'text',
  text,
  format: 0,
  detail: 0,
  mode: 'normal',
  style: '',
  version: 1,
})

export const lexicalParagraph = (text: string): LexicalElementNode => ({
  type: 'paragraph',
  children: [lexicalText(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  version: 1,
})

export const lexicalHeading = (text: string, tag: 'h2' | 'h3' = 'h2'): LexicalElementNode => ({
  type: 'heading',
  tag,
  children: [lexicalText(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  version: 1,
})

export const lexicalRoot = (children: LexicalNode[]) => ({
  root: {
    type: 'root',
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
})

export const lexicalFromParagraphs = (paragraphs: string[]) =>
  lexicalRoot(paragraphs.map((paragraph) => lexicalParagraph(paragraph)))

export const lexicalFromSections = (
  sections: Array<{ heading: string; paragraphs: string[]; level?: 'h2' | 'h3' }>,
) =>
  lexicalRoot(
    sections.flatMap(({ heading, paragraphs, level = 'h2' }) => [
      lexicalHeading(heading, level),
      ...paragraphs.map((paragraph) => lexicalParagraph(paragraph)),
    ]),
  )
