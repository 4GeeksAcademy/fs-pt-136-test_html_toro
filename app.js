function setView(view) {
    document.getElementById('grid-view').style.display = view === 'grid' ? 'block' : 'none';
    document.getElementById('list-view').style.display = view === 'list' ? 'block' : 'none';
    document.getElementById('btn-grid').classList.toggle('active', view === 'grid');
    document.getElementById('btn-list').classList.toggle('active', view === 'list');
}

//const views = ['grid', 'list'];
//
//function setView(Active) {
//    views.forEach(view => {
//        document.getElementById(`${view}-view`).style.display = view === active ? 'block' : 'none';
//        document.getElementById(`btn-${view}`).classList.toggle('active', view === active);
//    });
//}