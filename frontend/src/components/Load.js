export default function Load() {
    return (<form>
        <h1>Upload a CSV file</h1>
        <div className="custom-file mt-4">
            <input type="file" className="custom-file-input" id="validatedInputGroupCustomFile" required />
            <label className="custom-file-label" htmlFor="validatedInputGroupCustomFile">Choose file...</label>
        </div>
        <input type="submit" className="btn btn-primary mt-3" value="Submit" />
    </form>);
}