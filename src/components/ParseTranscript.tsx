// 秒数変換のロジック
export const parseTranscript = (rawText: string) => {
  const lines = rawText.split('\n').map(l => l.trim()).filter(l => l !== "");
  const result = [];

  for (let i = 0; i < lines.length; i += 2) {
    const timeStr = lines[i];     // 例: "2:05"
    const text = lines[i + 1];    // 例: "Hello"

    if (timeStr && text) {
      const parts = timeStr.split(':').map(Number);
      let seconds = 0;
      if (parts.length === 2) { // 分:秒
        seconds = parts[0] * 60 + parts[1];
      } else if (parts.length === 3) { // 時:分:秒
        seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
      }

      result.push({
        start: seconds,
        end: seconds + 3, // YouTubeの文字起こしには終了時間がないので、一旦3秒間出す設定
        textEn: text,
        textJa: ""
      });
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    result[i].end = result[i + 1].start;
  }

  return result;
};