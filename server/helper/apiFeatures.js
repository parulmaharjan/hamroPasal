class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  //for search
  search() {
    const keyword = this.queryStr.keyword
      ? {
          productName: { $regex: this.queryStr.keyword, $options: "i" },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  //for filter
  filter() {
    const querycopy = { ...this.queryStr };
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete querycopy[key]);

    //for price and ratings
    let queryStr = JSON.stringify(querycopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    if (this.queryStr.category) {
      this.query = this.query.find({ category: this.queryStr.category });
    }
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  //for pagination
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

export default ApiFeatures;
