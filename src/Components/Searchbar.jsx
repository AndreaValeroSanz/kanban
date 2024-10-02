
function Searchbar() {
    return (
        <div class="container ">

            <div class="bg-gray rounded-3 w-25 px-2">
              <i class="bi bi-search bg-transparent"></i>
              <input
                type="text"
                class="border-0 bg-transparent px-2"
                placeholder="Search for anything..."
              />
            </div>
      </div>
    );
}    

export default Searchbar;