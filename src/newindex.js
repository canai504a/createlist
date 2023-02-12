import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";
  // タグの追加
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list_row";
  const pTag = document.createElement("p");

  // buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // console.log(completeButton);

  completeButton.addEventListener("click", () => {
    // alert("完了");

    // 押された完了ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(div.parentNode);
    // const deleteTarget = div.parentNode;
    // document.getElementById("imcomplete_list").removeChild(deleteTarget);

    // 実はここまでの学習で実装できるため一度やってみよう
    // やりたい事としては、入力した文字で完了したTODOにDOMを生成して、
    // 未完了のTODOから消す

    // ///////////////////////////////////////////////////////////////////////
    // 完了リストに追加する要素
    const addTarget = pTag.parentNode;
    // TODO内容テキストを取得

    const text = addTarget.firstElementChild.innerText;
    // console.log(text);

    // div以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget);

    // buttonタグ
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 処理の追加
    backButton.addEventListener("click", () => {
      // alert();
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document
        .getElementById("complete_list")
        .removeChild(deleteTarget.parentNode);

      //テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      // console.log(text);
    });

    // liタグ生成
    addTarget.appendChild(pTag);
    addTarget.appendChild(backButton);
    pTag.innerText = text;
    // console.log(addTarget.parentNode);
    // console.log(addTarget);

    // 完了リストに追加
    document.getElementById("complete_list").appendChild(addTarget.parentNode);
  });

  // 出来上がった後でボタンに対して処理を追加するのではなく
  // 処理が追加されてあるボタンを生成するイメージ
  // バグが発生した時にどこが原因か分かりやすくするために
  // コードを分別しながら生成する

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  deleteButton.addEventListener("click", () => {
    // alert("削除");
    // やりたい事としてはボタン押したらliタグごと消したい
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    // const deleteTarget = div.parentNode;
    // console.log(deleteTarget);
    // document.getElementById("imcomplete_list").removeChild(deleteTarget);
    deleteFromIncompleteList(div.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(pTag);
  pTag.innerText = inputText;
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了リストに追加
  document.getElementById("imcomplete_list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete_list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());

// 削除ボタン完了ボタン追加
// 削除ボタン動作

// 完了ボタン動作として
// １．削除ボタンと同様に削除動作実行
// ２．同様の動作を実行するから一つの関数にまとめた
// ３．追加削除する要素はliタグを使いまわすとして、divタグの親要素（liタグ）をアドターゲットとした
// 親要素の指定方法はparentNOde
// 最初の要素のインナーテキストとして、pタグの文字を追加
// 後は完了したTODOのリストにID指定で追加
