const router = require ('express').Router();

router.get('/project/:id/comments/', async (req,res) => {
    try{
        const projectId = req.params.projectId;
        const response = await fetch(`/projects/${projectId}`);
        const comments = await response.json();
        res.render('project', {comments});
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;