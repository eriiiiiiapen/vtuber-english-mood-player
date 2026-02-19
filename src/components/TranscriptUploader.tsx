import React from 'react';
import { parseTranscript } from './ParseTranscript';

export const TranscriptUploader = () => {
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    console.log("読み込んだテキスト:", text);

    const parsedCaptions = parseTranscript(text);
    console.log("変換後のオブジェクト:", parsedCaptions);
  };

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px dashed #ccc' }}>
      <h4>字幕ファイルをアップロード</h4>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      <p style={{ fontSize: '12px' }}>YouTubeの文字起こしをコピペしたtxtを選択してください</p>
    </div>
  );
};
