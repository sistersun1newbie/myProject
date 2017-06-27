export default {
    mounted () {
        let dragdiv = document.querySelector('.el-dialog');
        if(!dragdiv)return
         document.querySelector('.el-dialog__header').setAttribute('draggable',true);
        dragdiv.addEventListener('dragstart', function (e) {
            e.dataTransfer.effectAllowed = "move";  //移动效果
            e.dataTransfer.setData("text", '');  //附加数据，　没有这一项，firefox中无法移动
            return true;
        }, false);
        document.addEventListener('dragover', function (e) {//取消冒泡 ,不取消则不能触发 drop事件
            e.preventDefault()|| e.stopPropagation();
        }, false);
        document.addEventListener('drop', function (e) {
            // if(e.target.className !=='el-dialog__header'&&e.target.className !=='el-dialog__wrapper')return
            dragdiv.style.left = (e.pageX) + 'px';
            dragdiv.style.top = (e.pageY) + 'px';
            e.preventDefault() || e.stopPropagation();  //不取消，firefox中会触发网页跳转到查找setData中的内容
        }, false);
    },
}