const Search = () => {
  return (
    <div>
      <form>
        <div className='row'>
          <div className='form-group col-md-8'>
            <input type='text' className='form-control form-control-lg' placeholder='Search img'/>
          </div>
          <div className='form-group col-md-4'>
            <input type='submit' className='btn btn-lg btn-danger' placeholder='Search img'/>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;
