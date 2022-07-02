// lottie.loadAnimation({
//     container: document.getElementById('lottie'), // アニメーションを追加する要素
//     renderer: 'svg', // レンダリングのタイプ
//     loop: true, // アニメーションをループさせるかどうか
//     autoplay: true, // アニメーションを自動再生するかどうか
//     path: './data.json' // アニメーションのjsonファイルのパス
// });

const onClickAdd = () => {

    //テキストボックスの値を取得、初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleateList(inputText);

};

//未完了リストから指定の要素を削除
const deleteFromIncompleateList = (target) => {
    document.getElementById("imcomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleateList = (text) => {

    //divタグを生成
    const div = document.createElement("div");
    div.className = "list-row";


    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //完了ボタンタグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //押された未完了のボタンの親タグ(div)を未完了のリストから削除
        deleteFromIncompleateList(deleteButton.parentNode);

        //完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        //内容のテキストを取得
        const text = addTarget.firstElementChild.innerText;

        //div以下を初期化
        addTarget.textContent = null;

        //liタグを生成
        const li = document.createElement('li');
        li.innerText = text;

        //buttonタグ生成
        const backButton = document.createElement('button');
        backButton.innerText = "戻す"
        backButton.addEventListener('click', () => {
            //押された戻すボタンの親タグを完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            //テキスト取得
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleateList(text);
        });

        //divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        //完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);



    });
    // button.className = "btn";


    //削除ボタン生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親タグ(div)を未完了のリストから削除
        deleteFromIncompleateList(completeButton.parentNode);

    });
    // button.className = "btn";


    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);


    //未完了のリストに追加
    document.getElementById("imcomplete-list").appendChild(div);

};



document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());