const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Middleware
app.use(cors());
app.use(express.json());

// Sample blog posts (replace with a database in production)
const posts = [
  {
    id: 1,
    title: 'How to Automate Linux Patching',
    content: 'This post covers automating Linux patching using Ansible and cron...',
    date: '2025-06-01',
    tags: ['Linux', 'Ansible']
  },
  {
    id: 2,
    title: 'Hardening Ubuntu with CIS Level 1 Benchmark',
    content: 'Learn how to secure Ubuntu servers using CIS benchmarks...',
    date: '2025-06-10',
    tags: ['Security', 'Linux']
  },
  {
    id: 3,
    title: 'Monitoring EC2 with CloudWatch + Prometheus',
    content: 'Setup monitoring for AWS EC2 instances using CloudWatch...',
    date: '2025-06-15',
    tags: ['AWS', 'Prometheus']
  },
  {
    id: 4,
    title: 'Bash vs Python for Admin Tasks',
    content: 'Comparing Bash and Python for Linux admin tasks...',
    date: '2025-06-20',
    tags: ['Bash', 'Python']
  }
];

// API Routes
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});