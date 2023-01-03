class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    const pageCount = this.pageCount() - 1;

    if (pageIndex < 0 || pageIndex > pageCount) return -1;

    if (pageIndex < pageCount) {
      return this.itemsPerPage;
    } else {
      return this.itemCount() - this.itemsPerPage * pageCount;
    }
  }

  pageIndex(itemIndex) {
    if (
      this.itemCount() === 0 ||
      itemIndex >= this.itemCount() ||
      itemIndex < 0
    )
      return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
