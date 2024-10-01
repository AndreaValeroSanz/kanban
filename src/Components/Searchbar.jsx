
function Searchbar() {
    return (
        <div class="container py-3">

            <div class="bg-light rounded-3 w-25 px-2">
              <i class="bi bi-search"></i>
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