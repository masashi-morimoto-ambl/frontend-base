export const getRelativeFilePath = (fileName: string) => {
  /**
   * ファイル名を渡せば、ファイルのパスを返す。
   */
  return `/src/assets/${fileName}`
}
