# AI VTuber Dataset 2026

A structured dataset of active AI VTubers streaming on Twitch. Maintained by [Khaos (XO_Khaos)](https://www.twitch.tv/xo_khaos).

## Files

| File | Format | Description |
| --- | --- | --- |
| `ai-vtubers-2026.json` | JSON | Full dataset, 15 entries, nested fields |
| `ai-vtubers-2026.csv` | CSV | Flat tabular version, pipe-delimited tags |

## Schema

| Field | Type | Description |
| --- | --- | --- |
| `name` | string | AI VTuber name |
| `developer` | string/null | Developer name, null if none |
| `type` | string | Always "AI" |
| `species` | string | Character species (Demon, Android, Catgirl, Ghost, etc.) |
| `gender` | string | Male or Female |
| `hair` | string/null | Hair color if known |
| `eyes` | string/null | Eye color if known |
| `model_type` | string | "2D" or "3D" |
| `tags` | array | Descriptive tags (pipe-delimited in CSV) |
| `twitch` | string | Twitch channel URL |
| `youtube` | string/null | YouTube channel URL |
| `twitter` | string/null | Twitter/X URL |
| `tiktok` | string/null | TikTok URL |
| `instagram` | string/null | Instagram URL |
| `bluesky` | string/null | Bluesky URL |
| `discord_247` | boolean | Whether the AI is available 24/7 on Discord |
| `local_ai` | boolean | Whether the AI runs fully locally |
| `featured` | boolean | Whether the AI is featured on the directory |
| `status` | string | "active" or "inactive" |

## Usage

### JSON

```bash
curl https://aivtuber.tv/dataset/ai-vtubers-2026.json
```

### CSV

```python
import pandas as pd
df = pd.read_csv("https://aivtuber.tv/dataset/ai-vtubers-2026.csv")
```

## License

CC0 1.0 (Public Domain). Use it for research, apps, training, Wikipedia citations, blog posts, whatever. No attribution required, though appreciated.

## Last Updated

2026-07-11
