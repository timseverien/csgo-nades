import { ContentBlock } from '../ContentBlock';
import { Flow } from '../Flow';
import { VisuallyHidden } from '../VisuallyHidden';

const CONFIG_JUMPTHROW = `
alias "+jumpthrow" "+jump;-attack";
alias "-jumpthrow" "-jump";
bind alt "+jumpthrow"
`.trim();

const CONFIG_PRACTISE = `
bot_kick
ammo_grenade_limit_total 5
mp_autoteambalance 0
mp_buy_anywhere 1
mp_buytime 9999
mp_freezetime 0
mp_limitteams 0
mp_maxmoney 60000
mp_respawn_on_death_ct 1
mp_respawn_on_death_t 1
mp_roundtime 60
mp_roundtime_defuse 60
mp_startmoney 60000
mp_warmup_end
sv_cheats 1
sv_grenade_trajectory 1
sv_grenade_trajectory_time 15
sv_infinite_ammo 1
sv_showimpacts 1
sv_showimpacts_time 10

bind ] sv_rethrow_last_grenade
bind x noclip
`.trim();

export const Configs = () => {
	return (
		<ContentBlock component="main">
			<Flow>
				<h1>
					<VisuallyHidden>Counter-Strike: Global Offensive</VisuallyHidden> Configs for nades
				</h1>

				<h2>Jump throw bind</h2>
				<p>
					Timing your throw while you jump is pretty hard. Not with this config! This lets you bind
					a button to perform a jump throw.
				</p>

				<h3>Usage:</h3>
				<ul>
					<li>Pick the util you wish to throw</li>
					<li>Hold down your mouse button to get ready to throw — but don’t release it yet!</li>
					<li>
						Press <code>alt</code> to jump and release the nade
					</li>
				</ul>
				<pre>
					<code>{CONFIG_JUMPTHROW}</code>
				</pre>

				<h2>Practise nades</h2>
				<p>
					Want to try some nades out without wasting valuable utils mid-match? The config below
					removes all distractions and temporarily shows the trajectory of your utils — perfect to
					tweak your nades or discover new ones!
				</p>

				<h3>Usage:</h3>
				<ul>
					<li>
						After a loading a map, run the config below with{' '}
						<code>exec name_of_your_config_file</code>
					</li>
					<li>
						Press <code>]</code> to rethrow the last grenade — this allows you to observe the
						trajectory from another angle
					</li>
					<li>
						Press <code>x</code> to fly around the map
					</li>
				</ul>
				<pre>
					<code>{CONFIG_PRACTISE}</code>
				</pre>
			</Flow>
		</ContentBlock>
	);
};
