import style from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={style.container}>
      <dl>
        <dt className={style.title}>ページが見つかりませんでした</dt>
        <dl className={style.text}>あなたがアクセスしようとしたページは存在しません。<br/>URLを確認してください。</dl>
      </dl>
    </div>
  );
}