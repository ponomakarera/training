<?php
require_once('simple_html_dom.php');
// file_get_htmlで取り込みたいURLを指定してやります。例で朝日新聞のヘッドライン部分です。
$html = file_get_html('http://www.asahi.com/');
// findメソッドで取り込みたい場所を指定してやります。jQueryっぽい指定ができてとても簡単！
foreach($html->find('#HeadLine .Guest li') as $list) {
            echo $list->outertext;
        }
//クリアーして開放してやります！
$html->clear();
unset($html);
?>
