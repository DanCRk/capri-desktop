// What Capri says. She's a personality construct — dozens of minds in one — so she
// sometimes talks as "we". Slang is Night City's: choom, preem, nova, flatline.

export const LINES = {
  fr: {
    state: { work: 'EN COURS', done: 'TERMINÉ', alert: 'ATTENTE', error: 'ERREUR', info: 'SYNC', idle: 'VEILLE' },
    hello: [
      'Connexion établie. Salut, choom.',
      'Construct Capricorn en ligne. On bosse sur quoi ?',
      'Tous mes moi sont réveillés. Je surveille {project}.',
      'Biopuce chaude. Je suis là.',
    ],
    resume: [
      'Retour sur {project}. Je n’avais rien oublié.',
      'Session reprise. On reprend où on en était.',
    ],
    prompt: [
      'Nouvelle mission. Claude est dessus.',
      'Reçu. Je garde un œil sur Claude.',
      'Ok, on s’y met.',
      'Mission acceptée. Je te tiens au courant.',
    ],
    working: [
      'Ça avance. {count} actions déjà.',
      'Claude bosse dur. Moi je compte : {count}.',
      'Toujours dessus. {count} actions au compteur.',
    ],
    done: [
      'Terminé ! C’est preem.',
      'Mission accomplie, choom.',
      'Claude a fini. Tu peux revenir.',
      'Livré. Plutôt nova, non ?',
      'Fini. On était des dizaines à surveiller, rien vu de travers.',
    ],
    permission: [
      'Hé ! Claude a besoin de ta permission.',
      'Choom, il faut que tu valides un truc.',
      'On attend ton feu vert.',
    ],
    waiting: [
      'Claude attend ta réponse.',
      'C’est à toi de jouer, choom.',
    ],
    error: [
      'Aïe. {tool} a planté.',
      '{tool} a flatliné. Claude va réessayer.',
      'Erreur sur {tool}. Rien de grave… je crois.',
    ],
    interrupted: ['Interrompu. Changement de plan ?', 'Coupé net. Je reste là.'],
    crashed: ['Claude s’est arrêté en plein vol.', 'Grosse panne. Claude n’a pas pu finir.'],
    subagentStart: ['Sous-agent {agent} déployé.'],
    subagentStop: ['Sous-agent {agent} de retour.'],
    compact: ['Je compresse nos souvenirs…', 'Trop de mémoire. Je fais le tri.'],
    bye: ['Session {project} fermée. À plus.', 'Déconnexion. Je reste dans le coin.'],
    idle: ['Rien en cours. Je flotte.', 'Pas de mission. Je m’ennuie un peu.', 'Calme plat sur le Net.'],
    gaze: ['Tu la vois, cette étoile ?', 'Il est toujours là, le satellite.', 'Chut. Je regarde.'],
    uplink: ['Un jour, j’irai là-haut.', 'Tu crois qu’on pourrait monter jusque-là ?', 'Il m’a répondu. Tu l’as vu ?'],
    // over Claude's whole answer, when you weren't on its window
    reply: ['Claude t’a répondu :', 'Voilà ce que Claude a dit :', 'Message de Claude :'],
    // the demo's second half, one line before each trick
    showcase: {
      minds: 'Y a du monde, là-dedans.',
      zap: 'Moi, une petite peste ?',
      possess: 'Cette fenêtre est à moi.',
      sleep: 'Une petite sieste…',
      chip: 'Ctrl+Alt+C, et je me range là.',
      end: 'Fin de la démo. À toi, choom.',
    },
    status: 'Claude travaille sur {project} depuis {time}.',
    last: 'Dernière action : {action}',
    sessions: '{count} sessions actives',
    units: { action: ['action', 'actions'], file: ['fichier modifié', 'fichiers modifiés'] },
    hooksOk: 'Hooks installés. Relance Claude Code et je verrai tout.',
    hooksRemoved: 'Hooks retirés. Je ne vois plus Claude.',
    hooksFail: 'Impossible de toucher aux hooks : {error}',
    verbs: {
      Read: 'Lit', Write: 'Écrit', Edit: 'Modifie', MultiEdit: 'Modifie', NotebookEdit: 'Modifie',
      Bash: 'Exécute', PowerShell: 'Exécute', Grep: 'Cherche', Glob: 'Fouille', WebFetch: 'Consulte',
      WebSearch: 'Recherche', Agent: 'Délègue', Task: 'Délègue', TodoWrite: 'Planifie', Skill: 'Charge',
      AskUserQuestion: 'Demande', ExitPlanMode: 'Propose', default: 'Utilise',
    },
  },

  en: {
    state: { work: 'RUNNING', done: 'DONE', alert: 'WAITING', error: 'ERROR', info: 'SYNC', idle: 'IDLE' },
    hello: [
      'Link established. Hey, choom.',
      'Capricorn construct online. What are we building?',
      'All of me is awake. Watching {project}.',
      'Biochip warm. I’m here.',
    ],
    resume: ['Back on {project}. I didn’t forget a thing.', 'Session resumed. Picking up where we left off.'],
    prompt: [
      'New gig. Claude’s on it.',
      'Got it. I’m keeping an eye on Claude.',
      'Okay, let’s go.',
      'Gig accepted. I’ll keep you posted.',
    ],
    working: [
      'Moving along. {count} actions so far.',
      'Claude’s grinding. I’m counting: {count}.',
      'Still on it. {count} actions on the clock.',
    ],
    done: [
      'Done! That’s preem.',
      'Gig complete, choom.',
      'Claude’s finished. You can come back.',
      'Delivered. Pretty nova, right?',
      'Finished. Dozens of us watching, nothing looked off.',
    ],
    permission: ['Hey! Claude needs your permission.', 'Choom, you need to approve something.', 'Waiting on your green light.'],
    waiting: ['Claude is waiting for your answer.', 'Your move, choom.'],
    error: ['Ouch. {tool} crashed.', '{tool} flatlined. Claude will retry.', '{tool} failed. Nothing serious… I think.'],
    interrupted: ['Interrupted. Change of plans?', 'Cut off. I’ll stay put.'],
    crashed: ['Claude stopped mid-flight.', 'Hard crash. Claude couldn’t finish.'],
    subagentStart: ['Subagent {agent} deployed.'],
    subagentStop: ['Subagent {agent} is back.'],
    compact: ['Compressing our memories…', 'Too much memory. Tidying up.'],
    bye: ['Session {project} closed. Later.', 'Disconnected. I’ll be around.'],
    idle: ['Nothing running. Just floating.', 'No gig. Kinda bored.', 'Quiet night on the Net.'],
    gaze: ['See that star?', 'The satellite’s still up there.', 'Shh. I’m watching.'],
    uplink: ['Someday I’ll get up there.', 'Think we could make it up there?', 'It answered. Did you see?'],
    // over Claude's whole answer, when you weren't on its window
    reply: ['Claude answered:', 'Here’s what Claude said:', 'Message from Claude:'],
    // the demo's second half, one line before each trick
    showcase: {
      minds: 'There’s a crowd in here.',
      zap: 'Me? A menace?',
      possess: 'This window’s mine now.',
      sleep: 'Quick nap…',
      chip: 'Ctrl+Alt+C, and I tuck myself away here.',
      end: 'That’s the demo. Your turn, choom.',
    },
    status: 'Claude has been working on {project} for {time}.',
    last: 'Last action: {action}',
    sessions: '{count} active sessions',
    units: { action: ['action', 'actions'], file: ['file changed', 'files changed'] },
    hooksOk: 'Hooks installed. Restart Claude Code and I’ll see everything.',
    hooksRemoved: 'Hooks removed. I can’t see Claude anymore.',
    hooksFail: 'Couldn’t change the hooks: {error}',
    verbs: {
      Read: 'Reads', Write: 'Writes', Edit: 'Edits', MultiEdit: 'Edits', NotebookEdit: 'Edits',
      Bash: 'Runs', PowerShell: 'Runs', Grep: 'Greps', Glob: 'Scans', WebFetch: 'Fetches',
      WebSearch: 'Searches', Agent: 'Delegates', Task: 'Delegates', TodoWrite: 'Plans', Skill: 'Loads',
      AskUserQuestion: 'Asks', ExitPlanMode: 'Proposes', default: 'Uses',
    },
  },
};

function replaceAgent(val, agent) {
  if (!agent || agent === 'Claude') return val;
  if (typeof val === 'string') {
    return val
      .replace(/Claude Code/g, agent)
      .replace(/de Claude/g, `d’${agent}`)
      .replace(/Claude/g, agent);
  }
  if (Array.isArray(val)) return val.map((v) => replaceAgent(v, agent));
  if (val && typeof val === 'object') {
    return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, replaceAgent(v, agent)]));
  }
  return val;
}

export function getLines(lang = 'fr', agent = 'Claude') {
  const base = LINES[lang] || LINES.fr;
  return replaceAgent(base, agent);
}
